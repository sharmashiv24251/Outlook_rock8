// // types.ts
// export interface EmailFrom {
//   email: string;
//   name: string;
// }

// export interface Email {
//   id: string;
//   from: EmailFrom;
//   date: number;
//   subject: string;
//   short_description: string;
// }

// export interface EmailBody {
//   id: string;
//   body: string;
// }

export interface EmailFrom {
  email: string;
  name: string;
}

export interface Email {
  id: string;
  from: EmailFrom;
  date: number;
  subject: string;
  short_description: string;
}

export interface EmailBody {
  id: string;
  body: string;
}

export interface EmailContentProps {
  isWide: boolean;
  text: string;
  email: Email;
  isLoading: boolean;
}

export interface EmailCardProps {
  email: Email;
  isSelected: boolean;
  onSelect: (id: string) => void;
}
