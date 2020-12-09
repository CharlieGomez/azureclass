import { Component, Input, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import AOS from 'aos';

declare var $: any;

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
@ViewChildren('ci1,ci2,ci3') elms: QueryList<any>;
@Input() progSkills: any;
@Input() otherSkills: any;
@Input() otherSkills2: any;
ciActive: 'ci1';

constructor(private renderer: Renderer2){
  this.renderer.listen('window', 'scroll', this.detectElms.bind(this));
}
ngAfterViewInit () {
  setTimeout(this.detectElms.bind(this));
}

detectElms(){
  this.elms.forEach((elm, index) => {
    if (isInViewport(elm.nativeElement)) {
      if (elm.nativeElement.id !== this.ciActive){
        this.ciActive = elm.nativeElement.id;
        this.refreshAOS();
      }
    }
  });
}

refreshAOS(){
  $(window).on('load', function () {
    AOS.refresh();
  });
  $(function () {
    AOS.init();
  });
}


}


function isInViewport (elm) {
  var elementTop = elm.offsetTop;
  var elementBottom = elementTop + elm.offsetHeight;
  // in this specific case the scroller is document.documentElement (<html></html> node)
  var viewportTop = document.documentElement.scrollTop;
  var viewportBottom = viewportTop + document.documentElement.clientHeight;

  return elementBottom > viewportTop && elementTop < viewportBottom;
}
