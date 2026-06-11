# Hittatsu PWA アイコン生成スクリプト
# 使い方: icon-source.png を同フォルダに配置 → このスクリプトを右クリック → "PowerShell で実行"

Add-Type -AssemblyName System.Drawing

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$src = Join-Path $scriptDir "icon-source.png"
$outDir = Join-Path $scriptDir "icons"

if (-not (Test-Path $src)) {
    Write-Host "❌ icon-source.png が見つかりません。スクリプトと同じフォルダに配置してください。" -ForegroundColor Red
    Write-Host "   期待されるパス: $src"
    Read-Host "Enter キーで終了"
    exit 1
}

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
}

$srcImg = [System.Drawing.Image]::FromFile($src)
Write-Host "✓ ソース読込: $($srcImg.Width)x$($srcImg.Height)" -ForegroundColor Green

# 通常アイコン: 192px, 512px（中央配置でフィット）
foreach ($size in 192, 512) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = "AntiAlias"
    $g.InterpolationMode = "HighQualityBicubic"
    $g.PixelOffsetMode = "HighQuality"
    # 背景：白でクリア
    $g.Clear([System.Drawing.Color]::White)
    # 縦横比保持で描画
    $scale = [Math]::Min($size / $srcImg.Width, $size / $srcImg.Height)
    $w = [int]($srcImg.Width * $scale)
    $h = [int]($srcImg.Height * $scale)
    $x = ($size - $w) / 2
    $y = ($size - $h) / 2
    $g.DrawImage($srcImg, $x, $y, $w, $h)
    $g.Dispose()
    $outPath = Join-Path $outDir "icon-$size.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "✓ 生成: icon-$size.png" -ForegroundColor Green
}

# Maskable アイコン: 512px（端末側で角丸/円形にマスクされる前提で、安全エリアに収まるよう余白を取る）
$mSize = 512
$safeRatio = 0.8  # 中央 80% に収める（端末によるマスクに対応）
$bmp = New-Object System.Drawing.Bitmap $mSize, $mSize
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = "AntiAlias"
$g.InterpolationMode = "HighQualityBicubic"
$g.PixelOffsetMode = "HighQuality"
$g.Clear([System.Drawing.Color]::White)
$inner = [int]($mSize * $safeRatio)
$scale = [Math]::Min($inner / $srcImg.Width, $inner / $srcImg.Height)
$w = [int]($srcImg.Width * $scale)
$h = [int]($srcImg.Height * $scale)
$x = ($mSize - $w) / 2
$y = ($mSize - $h) / 2
$g.DrawImage($srcImg, $x, $y, $w, $h)
$g.Dispose()
$bmp.Save((Join-Path $outDir "icon-maskable-512.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "✓ 生成: icon-maskable-512.png (safe zone $($safeRatio*100)%)" -ForegroundColor Green

$srcImg.Dispose()

Write-Host ""
Write-Host "🎉 完了！" -ForegroundColor Cyan
Write-Host "生成先: $outDir"
Read-Host "Enter キーで終了"
