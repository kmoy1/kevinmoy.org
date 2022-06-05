/** Options for Marked rendering. */
import { Renderer as MarkdownRenderer } from 'marked';

export class MarkedOptions {
  baseUrl?: string;
  breaks?: boolean;
  gfm?: boolean;
  headerIds?: boolean;
  headerPrefix?: string;
  langPrefix?: string;
  mangle?: boolean;
  pedantic?: boolean;
  renderer?: MarkdownRenderer;
  silent?: boolean;
  smartLists?: boolean;
  smartypants?: boolean;
  xhtml?: boolean;
  highlight?(code: string, lang: string, callback?: (error: any | undefined, code: string) => void): string;
}
