import api from '@/api/axios';
import type { SellerInterface } from '../types/Seller';
import type { ApiResponse } from '../types/ApiResponse';

export const requestSellers = async (): Promise<SellerInterface[]> => {
  const response = await api.get<ApiResponse<SellerInterface[]>>('/seller');
  return response.data.data;
};

export const sendEmail = async (seller_id: number) => {
  await api.get(`/email/${seller_id}`);
}
