import { element } from "angular";

export class UtilsService {
  spinerHtml = `<div id="spinner" class="spinner-wrapper"><div class="spinner"></div></div>`

  changeTitle(title: string) {
    element(document).find('title').text(title);
  }

  startLoader() {
    if(!element(document.querySelector( '#spinner' )).length){
      element(document).find('body').append(this.spinerHtml);
    }
  }

  stopLoader() {
    element(document.querySelector( '#spinner' )).remove();
  }
}