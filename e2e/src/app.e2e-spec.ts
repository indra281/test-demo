import { AppPage } from "./app.po";

describe("CSCD App", () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });
  it("My App Load Successfully", () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain("Tab One");
  });
});
