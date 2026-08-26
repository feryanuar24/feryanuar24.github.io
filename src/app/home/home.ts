import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { portfolioData } from '../app.data';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagePayload, ProjectService } from '../app.service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private projectService = inject(ProjectService);
  private changeDetector = inject(ChangeDetectorRef);
  portfolioData = portfolioData;
  isMessageModalOpen = false;
  isSubmitting = false;
  messageStatus: 'success' | 'error' | null = null;
  messageForm: MessagePayload = {
    name: '',
    email: '',
    message: '',
  };

  openMessageModal(): void {
    this.isMessageModalOpen = true;
    this.messageStatus = null;
  }

  closeMessageModal(): void {
    if (!this.isSubmitting) {
      this.isMessageModalOpen = false;
    }
  }

  async submitMessage(): Promise<void> {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.messageStatus = null;

    try {
      await this.projectService.sendMessage(this.messageForm);
      this.messageStatus = 'success';
      this.messageForm = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('Error sending message:', error);
      this.messageStatus = 'error';
    } finally {
      this.isSubmitting = false;
      this.changeDetector.markForCheck();
    }
  }
}
