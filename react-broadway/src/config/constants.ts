export const MessageConstants = {
  TOKEN_EXPIRED: "Token expired.",
  INVALID_TOKEN : "Invalid activationToken"
};


export const UserRoles = {
  ADMIN: "admin",
  CUSTOMER : "customer",
  SELLER : "seller"
};


export type SearchParams = {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  order?: string;
}