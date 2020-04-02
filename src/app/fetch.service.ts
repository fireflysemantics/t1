import { Injectable, OnInit, OnDestroy } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  Topic,
  TOPIC_CATEGORY_VALUES_LOWERCASE
} from './model'


import { TOPIC_JSON_URL } from './constants'
import { untilDestroyed } from 'ngx-take-until-destroy'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContentService implements OnInit, OnDestroy {

  /**
   * Load the {@link Topic} instances from the topic json
   */
  async loadTopics():Promise<Topic[]> {
    const json:any = await this.fetch(TOPIC_JSON_URL)
    if (json) {
      const topics:Topic[] = []
      const topicCategories = JSON.parse(json)

      TOPIC_CATEGORY_VALUES_LOWERCASE().forEach(c=>{
        if (topicCategories[c]) {
           topicCategories[c].forEach(t=>{
            topics.push(new Topic(t))
          })
        }
      })
      return topics  
    }
    return null
  }

  /**
   * The topic container
   */
  constructor(
    private http: HttpClient) {

    this.loadTopics().then((topics:Topic[])=>{
      this.logImages(topics)
    })
  }

  logImages(topics:Topic[]) {
    topics.forEach( async (topic)=> {
      this.fetchImage(topic.headerImageURL).
      pipe(untilDestroyed(this)).subscribe(blob=>{
        if (blob) {
            console.log("BLOB FETCHED")
        }
      })
    })
  }

  /**
   * Fetch the pointed to by the URL.
   * 
   * @param url 
   * @return The content or void.
   */
  async fetch(url: string) {
    return await this.http.get(
      url,
      { responseType: 'text' }).toPromise().catch(() => {
        // console.log(`Could not fetch url ${url}.  
        // Implement a nervous system check for this.`)
      })
  }

  fetchImage(url:string): Observable<Blob> {
    return this.http.get(url, {
      responseType: "blob"
    });
  }

  ngOnInit() {}
  ngOnDestroy() {}
}