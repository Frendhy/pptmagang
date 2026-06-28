export interface StudentProfile {
  name: string;
  nim: string;
  program: string;
  faculty: string;
  university: string;
  year: string;
  avatarUrl?: string;
}

export interface SlideData {
  id: string;
  title: string;
  subTitle: string;
  moduleName: string;
  speakerNotes: string[];
}

export interface OrgNode {
  id: string;
  title: string;
  name: string;
  description: string;
  role: string;
  department: string;
  children?: OrgNode[];
}

export interface CustomerAR {
  id: string;
  customerName: string;
  customerCode: string;
  collectorName: string;
  plantCode: string;
  totalAR: number;
  current: number;
  over30: number;
  over60: number;
  over90: number;
  target: number;
  actual: number;
  status: 'Achieved' | 'Partial' | 'None' | 'No Target';
  riskLevel: 'Low' | 'Medium' | 'High';
  email: string;
  phone: string;
  invoicesCount: number;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  type: 'email' | 'whatsapp' | 'system';
  message: string;
  recipient: string;
  status: 'SUCCESS' | 'SENDING' | 'FAILED';
}

export interface DatabaseTable {
  name: string;
  description: string;
  columns: { name: string; type: string; key?: 'PK' | 'FK'; ref?: string }[];
}
