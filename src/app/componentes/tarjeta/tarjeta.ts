import { Component, input } from '@angular/core';

@Component({
    selector: 'app-tarjeta',
    templateUrl: './tarjeta.html',
    styleUrl: './tarjeta.css',
})
export class TarjetaComponent {
    completada = input<boolean>(false);
}
