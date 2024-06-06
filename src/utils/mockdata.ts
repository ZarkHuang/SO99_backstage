// src/utils/mockdata.ts

export interface TableData {
  roleName: string;
  roleLevel: string;
  actions: string;
}

export const mockTableData: TableData[] = [
  {
    roleName: '角色一',
    roleLevel: '層級一',
    actions: '操作一'
  },
  {
    roleName: '角色二',
    roleLevel: '層級二',
    actions: '操作二'
  },
  {
    roleName: '角色三',
    roleLevel: '層級三',
    actions: '操作三'
  }
];

export function getTableData(): TableData[] {
  return mockTableData;
}
