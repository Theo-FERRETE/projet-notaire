import fs from 'node:fs/promises'
import path from 'node:path'

import { NextResponse } from 'next/server'

const mediaDirectory = path.resolve(process.cwd(), 'media')

const contentTypes: Record<string, string> = {
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> },
) {
  const { filename } = await params
  const safeFilename = path.basename(filename)
  const filePath = path.join(mediaDirectory, safeFilename)

  try {
    const file = await fs.readFile(filePath)
    const extension = path.extname(safeFilename).toLowerCase()

    return new NextResponse(file, {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Media not found' }, { status: 404 })
  }
}
