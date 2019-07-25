// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { TestBed, async } from '@angular/core/testing';

// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { AppComponent } from './app.component';

// describe('AppComponent', () => {

//   let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

//   beforeEach(async(() => {
//     statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
//     splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
//     platformReadySpy = Promise.resolve();
//     platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

//     TestBed.configureTestingModule({
//       declarations: [AppComponent],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         { provide: StatusBar, useValue: statusBarSpy },
//         { provide: SplashScreen, useValue: splashScreenSpy },
//         { provide: Platform, useValue: platformSpy },
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it('should initialize the app', async () => {
//     TestBed.createComponent(AppComponent);
//     expect(platformSpy.ready).toHaveBeenCalled();
//     await platformReadySpy;
//     expect(statusBarSpy.styleDefault).toHaveBeenCalled();
//     expect(splashScreenSpy.hide).toHaveBeenCalled();
//   });

//   // TODO: add more tests!

// });

import { Adder } from "./app";
import { AppComponent } from "./app.component";
describe("MyApp Load Test Case :", () => {
  let expected = "";
  beforeEach(() => {
    expected = "AppComponent";
  });
  afterEach(() => {
    expected = "";
  });
  it("App Load Successfully", () => {
    console.log(AppComponent.name);
    expect(AppComponent.name).toEqual(expected);
  });
});
describe("Adder", () => {
  let expected: number = 4;
  beforeEach(() => {
    expected = 4;
  });
  afterEach(() => {
    expected = 4;
  });
  it("Answer is " + expected, () => {
    expect(Adder(2, 2)).toEqual(expected);
  });
});
