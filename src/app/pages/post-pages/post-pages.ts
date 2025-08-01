import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Posts } from '../models/posts';
import { PostsServices } from '../services/posts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-post-pages',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './post-pages.html',
  styleUrl: './post-pages.scss',
})
export class PostPages implements OnInit {
  postForm!: FormGroup;

  posts: Posts[] = [];

  createPost!: Posts;

  loader: boolean = false;

  constructor(private fb: FormBuilder, private postsService: PostsServices) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(10)]],
      content: ['', [Validators.required, Validators.maxLength(100)]],
      category: ['', [Validators.required]],
      tag: [''],
    });
  }
  get getTitle() {
    return this.postForm.controls['title'];
  }
  get getContent() {
    return this.postForm.controls['content'];
  }
  get getCategory() {
    return this.postForm.controls['category'];
  }
  onSubmit() {
    this.loader = true;
    this.postForm.markAllAsTouched();
    if (this.postForm.valid) {
      console.log('Form Submitted!', this.postForm.value);
      this.createPost = {
        title: this.postForm.value.title,
        content: this.postForm.value.content,
        category: this.postForm.value.category,
        tags: this.postForm.value.tag,
      };
      this.postsService.createPost(this.createPost).subscribe(
        (response: any) => {
          console.log('Post created successfully', response);
          this.posts.push(response as Posts);
          this.loader = false;
        },
        (error: any) => {
          console.error('Error creating post', error);
        }
      );
      this.postForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
