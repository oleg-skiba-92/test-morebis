export class PaginateController implements ng.IComponentController {
  currentPage: number;
  pageSize: number;
  totalCount: number;

  maxPage: number;

  fakeArr;

  $onChanges() {
    this.maxPage = Math.ceil(this.totalCount / this.pageSize);
    if (!!this.maxPage && this.currentPage > this.maxPage) {
      this.currentPage = this.maxPage;
    }
    this.fakeArr = new Array(this.maxPage)
  }

  changePage(page) {
    if (page < 1) {
      page = 1;
    }
    if (page > this.maxPage) {
      page = this.maxPage;
    }
    this.currentPage = page;
  }
}