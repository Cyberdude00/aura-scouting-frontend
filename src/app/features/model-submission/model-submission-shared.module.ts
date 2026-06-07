import { NgModule } from '@angular/core';
import { TypingPlaceholderDirective } from './components/typing-placeholder.directive';

@NgModule({
  imports: [TypingPlaceholderDirective],
  exports: [TypingPlaceholderDirective],
})
export class ModelSubmissionSharedModule {}
