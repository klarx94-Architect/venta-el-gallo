$target = "c:\Users\karc0\OneDrive\Desktop\ENTREGA_VENTA_EL_GALLO\venta-el-gallo\src\assets\raw"
New-Item -ItemType Directory -Force -Path $target

$source = "c:\Users\karc0\OneDrive\Desktop\Multimedia venta el gallo\Img web actual"

# Copy all files except ZIPs
Get-ChildItem -Path $source -File | Where-Object { $_.Extension -ne ".zip" } | Copy-Item -Destination $target -Force

# Extract all ZIPs
Get-ChildItem -Path $source -Filter "*.zip" | ForEach-Object {
    Expand-Archive -Path $_.FullName -DestinationPath $target -Force
}
