import { generateOGImage, alt, size, contentType } from './og-shared'

export { alt, size, contentType }

export default function Image() {
  return generateOGImage()
}
