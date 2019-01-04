import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'direcciones': new FormArray([])
    });
  }

  annadirDireccion() {
    (<FormArray>this.form.controls['direcciones']).push(new FormGroup({
      'direccion': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required)
    }));
  }

  eliminarDireccion(index: number) {
    (<FormArray>this.form.controls['direcciones']).removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
