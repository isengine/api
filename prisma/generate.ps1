Get-ChildItem -Filter "./prisma/schema/*.prisma" | Get-Content | Out-File -Encoding ASCII "./prisma/schema.prisma"
