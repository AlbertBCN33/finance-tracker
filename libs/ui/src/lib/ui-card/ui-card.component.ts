import {
  Component,
  ContentChild,
  ElementRef,
  input,
  AfterContentChecked,
  signal,
  AfterContentInit,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ContentChildren,
  QueryList,
  viewChild,
  computed,
  contentChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lib-ui-card',
  imports: [CommonModule, CardModule, TranslatePipe],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss',
})
export class UiCardComponent implements OnInit {
  title = input<string>();
  subtitle = input<string>();
  customHead1 = viewChild('[uiCardCustomHead]');
  hasCustomHead = computed(() => {
    console.log('hasCustomHead: ', this.customHead1());
    return !!this.customHead1();
  });
  customHead2 = contentChild('[uiCardCustomHead]');
  hasCustomHead2 = computed(() => {
    console.log('hasCustomHead2: ', this.customHead2());
    return !!this.customHead2();
  });

  customHead3 = contentChild('*');
  hasCustomHead3 = computed(() => {
    console.log('customHead3: ', this.customHead3());
    return !!this.customHead2();
  });

  ngOnInit(): void {
    console.log('card', this.customHead3());
  }
}
