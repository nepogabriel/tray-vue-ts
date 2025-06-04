import axios from 'axios';
import type { SellerInterface } from '../types/Seller';
import type { ApiResponse } from '../types/ApiResponse';

export const requestSellers = async (): Promise<SellerInterface[]> => {
  const response = await axios.get<ApiResponse<SellerInterface[]>>('http://localhost:8181/api/seller');
  return response.data.data;
};
