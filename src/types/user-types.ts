export interface UserResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    name: string;
    email: string;
  };
}
