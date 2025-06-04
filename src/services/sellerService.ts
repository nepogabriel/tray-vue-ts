import axios from 'axios';
import type { SellerInterface } from '../types/Seller';
import type { ApiResponse } from '../types/ApiResponse';
import { getCookie } from 'typescript-cookie';

export const requestSellers = async (): Promise<SellerInterface[]> => {
  const token = getCookie('my_api_token');

  const response = await axios.get<ApiResponse<SellerInterface[]>>(
    'http://localhost:8181/api/seller',
    {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      }
    }
  );
  return response.data.data;
};

export const sendEmail = async (seller_id: number) => {
  const token = getCookie('my_api_token');

  await axios.get(
    `http://localhost:8181/api/email/${seller_id}`,
    {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      }
    }
  );
}
