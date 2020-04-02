import { Entity } from '@fireflysemantics/slice';

const { keys } = Object;

/*
 * The class helps with code completion
 *
 * Defines the interface of objects in the phone number table.
 */
export class BlobImage extends Entity {
    constructor(
        public url: string,
        public data: Blob,
        public mimeType?: string,
        public tag?: string,
        public width?: string,
        public height?: string
    ) {
        super();
    }
}

/*
 * Base 64 Encoded Image.
 */
export class Base64Image extends Entity {
    constructor(
        public url: string,
        public data: string,
        public mimeType?: string,
        public tag?: string,
        public width?: string,
        public height?: string
    ) {
        super();
    }
}

export abstract class AbstractTopic extends Entity {
    summary?: string
}

export interface Tag {
    name: string
    value: string
}

export class Category extends AbstractTopic {
    name: string
    topics: Topic[] = []
}

export interface TopicMeta {
    id: string
    path: string
}

export class Topic extends AbstractTopic {

    public md5?: string
    public title?: string
    public category?: string
    public type?: string
    public date?: Date
    public version?: number
    public author?: string
    public readingTime: number
    public wordCount: number
    public documentURL?: string
    public document?: string | void
    public markdown?: string
    public html?: string
    public headerImageURL: string
    public tags?: string[] = []
    public relatedConcepts?: string[] = []
    public relatedFormulas?: string[] = []
    public relatedBlogs?: string[] = []
    public relatedTasks?: string[] = []

    constructor(t?: Topic) {
        super()
        Object.assign(this, t)
    }
}

export enum TopicCategories {
    ALL = 'All',
    GUIDES = 'Guides',
    BLOGS = 'Blogs',
    CONCEPTS = 'Concepts',
    TASKS = 'Tasks',
    FORMULAS = 'Formulas'
}

export function TOPIC_CATEGORY_VALUES(): string[] {
    return keys(TopicCategories).map(k => TopicCategories[k]);
}

export function TOPIC_CATEGORY_VALUES_LOWERCASE(): string[] {
    return keys(TopicCategories).map(k => TopicCategories[k].toLowerCase());
}


/**
 * These also serve as the Slice keys.
 */
export enum TopicTypes {
    GUIDE = 'guide',
    TASK = 'task',
    CONCEPT = 'concept',
    FORMULA = 'formula',
    BLOG = 'blog'
}

export const topicCategoryToTopicTypeMap: Map<string, string> = new Map();

topicCategoryToTopicTypeMap.
    set(TopicCategories.BLOGS, TopicTypes.BLOG);
topicCategoryToTopicTypeMap.
    set(TopicCategories.GUIDES, TopicTypes.GUIDE);
topicCategoryToTopicTypeMap.
    set(TopicCategories.CONCEPTS, TopicTypes.CONCEPT);
topicCategoryToTopicTypeMap.
    set(TopicCategories.FORMULAS, TopicTypes.FORMULA);
topicCategoryToTopicTypeMap.
    set(TopicCategories.BLOGS, TopicTypes.BLOG);

export enum SectionCategoryKeys {
    FS_ALPHA = 'FS Alpha',
    FS_BETA = 'FS Beta'
}

export const SECTION_KEYS =
    keys(
        SectionCategoryKeys).map(
            k => SectionCategoryKeys[k])

/**
 * The Active Menu Items
 */
export const ACTIVE_CATEGORY_KEY: string = "ACTIVE_CATEGORY_KEY"