// User model type
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  created_at: Date;
  updated_at: Date;
}

// Chat message type
export interface ChatMessage {
  id: string;
  user_id: string;
  session_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: Date;
}

// Project type
export interface Project {
  id: string;
  user_id: string;
  name: string;
  type: 'chat' | 'code' | 'website' | 'design' | 'content' | 'document';
  description?: string;
  data: Record<string, any>;
  created_at: Date;
  updated_at: Date;
}

// Subscription type
export interface Subscription {
  id: string;
  user_id: string;
  plan: 'free' | 'pro' | 'premium';
  status: 'active' | 'cancelled' | 'expired';
  created_at: Date;
  expires_at: Date;
}
