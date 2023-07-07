export interface IFormData {
  name: string;
  email: string;
  phone_number: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  pincode: number;
  country: string;
  geolocation: string;
}

export interface IFiles {
  single_file: File | null;
  multi_ups1: File | null;
  multi_ups2?: File | null;
  multi_ups3?: File | null;
}
