import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: { id: string; name: string; avatar: string };

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {}
}