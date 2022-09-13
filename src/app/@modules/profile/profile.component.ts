import { finalize, take } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IUser } from "src/app/@models/interfaces";
import { CredentialsService } from "src/app/@services/credentials/credentials.service";
import { ProfileService } from "src/app/@services/profile/profile.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public form: UntypedFormGroup;
  public toogleTypeInputPassword: boolean;
  public loading: boolean;

  constructor(
    private router: Router, 
    private readonly formBuilder: UntypedFormBuilder, 
    private credentials: CredentialsService,
    private profileService: ProfileService,
    private messageService: MessageService) {
    this.toogleTypeInputPassword = false;
    this.loading = false;
  }

  ngOnInit() {
    this.createForm();
    this.buildUser();
  }

  public navigateToPayments(): void {
    this.router.navigateByUrl("/my-payments");
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  private buildUser(): void {
    const user: IUser = this.credentials.user;
    this.form.patchValue({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password
    })
  }

  public changeTypeInputPassword():void {
    this.toogleTypeInputPassword = !this.toogleTypeInputPassword;
  }

  public submit(): void {
    if (this.form.valid) {
      this.loading = true;
      this.profileService.updateUser(this.form.value)
        .pipe(
          take(1),
          finalize(() => this.loading = false))
          .subscribe({
            next: response => {
              this.showToast('success', 'Successo', 'Usuário atualizado com sucesso!');
              this.credentials.credentials(response)
            },
            error: _ => {
              this.showToast('error', 'Error', 'Erro ao atualizar usuário, tente novamente.');
            }
          })
    }
  }

  public get emailControl(): AbstractControl | null {
    return this.form.controls["email"];
  }

  public get passwordControl(): AbstractControl | null {
    return this.form.controls["password"];
  }

  public get nameControl(): AbstractControl | null {
    return this.form.controls["name"];
  }

  public showToast(type: string, summary: string, message: string) {
    this.messageService.add({severity: type, summary, detail: message });
  }
}
