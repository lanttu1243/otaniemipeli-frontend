export default function getUnion<T>(arr1: T[], arr2: T[]): T[] {
  return Array.from(new Set([...arr1, ...arr2]));
}
export const UserTypeEnum = {
  admin: "Admin",
  ie: "IE",
  referee: "Tuomari",
  secretary: "Sihteeri",
  team: "Joukkue",
};
export const UserTypes: UserType[] = [
  "admin",
  "ie",
  "referee",
  "secretary",
  "team",
];
