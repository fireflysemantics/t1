import { join } from '@fireflysemantics/join'

export const TOPIC_JSON_URL = 'https://fireflysemantics.github.io/help-service-parts-md/fsalpha-content.json'
export const MODEL_FILE_NAME = 'model.json'
export const MARKDOWN_DOCUMENT_BASE_URL = 'https://fireflysemantics.github.io/help-service-parts-md'
export const IMAGE_DOCUMENT_BASE_URL = 'https://fireflysemantics.github.io/images'

/**
 * Note that we are not really using this.
 * Instead we are loading the urls right from
 * the topic imageHeaderURL per the TOPIC JSON.
 */
export const IMAGE_DOCUMENT_MODEL_URL = join(IMAGE_DOCUMENT_BASE_URL, MODEL_FILE_NAME)
