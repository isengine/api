#!/bin/bash
#cat "./prisma/schema/*.prisma" > "./prisma/schema.prisma"
find ./prisma/schema -name "*.prisma" | sort | xargs -I{} cat {} > ./prisma/schema.prisma
