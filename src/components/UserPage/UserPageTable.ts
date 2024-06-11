// src/configs/tableConfig.ts
import { h } from 'vue';
import { NSpace, NSwitch, NButton } from 'naive-ui';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

export const getTableColumns = (handleEdit: (row: any) => void) => [
    {
        title: '角色名稱',
        key: 'name',
        width: '200',
        sorter: (a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name),
    },
    {
        title: '角色層級',
        key: 'level',
        width: '200',
        sorter: (a: { level: string; }, b: { level: any; }) => a.level.localeCompare(b.level),
    },
    {
        title: '操作',
        key: 'actions',
        width: '80',
        align: 'center',
        render(row: any) {
            return h(NSpace, { justify: 'space-around', align: 'center' }, {
                default: () => [
                    h(NSwitch, { value: row.active }),
                    h(NButton, { 
                        quaternary: true,
                        class: 'edit-icon',
                        style: { cursor: 'pointer', padding: '0', width: '20px', height: '20px' },
                        onClick: () => handleEdit(row) 
                    }, {
                        default: () => h(SvgIcon, { icon: 'Edit', style: { width: '20px', height: '20px' } }) 
                    })
                ]
            });
        }
    }
];

export const getMockTableData = () => {
    const data = [];
    for (let i = 1; i <= 10; i++) {
      data.push({
        name: `多啦 ${i} 夢`,
        level: i % 2 === 0 ? '企業' : '管理員', // 交替設定 '企業' 和 '管理員'
        active: i % 2 === 0, // 偶數為 true, 奇數為 false
      });
    }
    return data;
  };
  