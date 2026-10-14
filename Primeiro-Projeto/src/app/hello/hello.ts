import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Seja bem-vindo';

  protected isDisabled = false;

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  private readonly countLog = effect( () => {
    console.log('Count changed', this.count());
  })
  
  protected increaseCounter()
  {
    this.count.update( value => value + 1);
  }

  protected decreaseCounter()
  {
    this.count.update(value => value - 1);
  }

  protected reset()
  {
    this.count.set(0);
  }
}
