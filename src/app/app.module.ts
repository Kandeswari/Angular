import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { SampleComponent } from './directive/sample/sample.component';
import {RouterModule, Routes } from "@angular/router";
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ReviewComponent } from './MyReview/review/review.component';
import { TitleComponent } from './MyReview/title/title.component';
import { ThumpnailComponent } from './MyReview/thumpnail/thumpnail.component';
import { DescriptionComponent } from './MyReview/description/description.component';
import { InbuiltComponent } from './pipes/inbuilt/inbuilt.component';
import { SortnumberPipe } from './custompipe/sortnumber.pipe';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { Consume1Component } from './consume/consume1/consume1.component';
import { MyserviceService } from './services/myservice.service';
import { TaskmanagerComponent } from './task/taskmanager/taskmanager.component';
import {HttpClientModule} from '@angular/common/http';
import { RestapiComponent } from './consume/restapi/restapi.component' 
import { UpdatefriendComponent } from './consume/updatefriend/updatefriend.component';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { ChildComponent } from './eventbinding/child/child.component';
import { Delete1Component } from './delete/delete1/delete1.component';
import { Delete2Component } from './delete/delete2/delete2.component';
import { Delete3Component } from './flatcomponent/delete3/delete3.component';
import { AnimateComponent } from './animation/animate/animate.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
const myroutes:Routes = [
{
path : '',
redirectTo:'family',
pathMatch:'full'
},
  {
    path:'family',      
    component:FamilyComponent
  },
  {
    path:'directive',      
    component:SampleComponent
  },
  {
    path:'Myreview',      
    component:ReviewComponent
  },
  {
    path:'Pipes', 
         
    component:InbuiltComponent
  },
  {
    path:'template', 
         
    component:TemplateformComponent
  },
  {
    path:'reactive', 
         
    component:ReactiveformComponent
  },
{
path:'consume1',
component:Consume1Component
},
{
  path:'taskmanager',
  component:TaskmanagerComponent
  },
  {
    path:'restapi',
    component:RestapiComponent
  },
  {
    path:'updatefriend/:myid',
    component:UpdatefriendComponent
  },
  {
    path:'eventbinding',
    component:ParentComponent
  },
  {
    path:'Inline Style & template',
    component:Delete1Component
  },
  {
    path:'animate',
    component:AnimateComponent
  },
  {
    path:'**',      
    component:NotfoundComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    
    FamilyComponent,
    
    FatherComponent,
    
    SampleComponent,
    
    NotfoundComponent,
    
    ReviewComponent,
    
    TitleComponent,
    
    ThumpnailComponent,
    
    DescriptionComponent,
    
    InbuiltComponent,
    
    SortnumberPipe,
    
    TemplateformComponent,
    
    ReactiveformComponent,
    
    Consume1Component,
    
    TaskmanagerComponent,
   
    RestapiComponent,UpdatefriendComponent, ParentComponent, ChildComponent, Delete1Component, Delete2Component, Delete3Component, AnimateComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,ReactiveFormsModule,FormsModule,HttpClientModule,RouterModule.forRoot(myroutes)],
      
      
      
      
      
      
      
     
   
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
