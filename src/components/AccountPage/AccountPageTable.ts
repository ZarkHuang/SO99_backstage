import { h } from 'vue';
import { NSpace, NSwitch, NButton } from 'naive-ui';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

export const getTableColumns = (handleEdit: (row: any) => void) => [
    {
        title: '用戶ID',
        key: 'id',
        width: '140',
        sorter: (a: { id: string; }, b: { id: string; }) => a.id.localeCompare(b.id),
    },
    {
        title: '姓名',
        key: 'name',
        width: '100',
        sorter: (a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name),
    },
    {
        title: '職稱',
        key: 'career',
        width: '100',
        sorter: (a: { career: string; }, b: { career: string; }) => a.career.localeCompare(b.career),
    },
    {
        title:'角色名稱',
        key: 'position',
        width: '100',
        sorter: (a: { position: string; }, b: { position: string; }) => a.position.localeCompare(b.position),
    },
    {
        title: '層級',
        key: 'level',
        width: '100',
        sorter: (a: { level: string; }, b: { level: string; }) => a.level.localeCompare(b.level),
    },
    {
        title: '操作',
        key: 'actions',
        width: '80',
        align:'center',
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
    for (let i = 1; i <= 20; i++) {
      data.push({
        id: `212315678${i.toString().padStart(2, '0')}`,
        name: `哆啦${i}夢`,
        career: i % 2 === 0 ? '家醫科醫師' : '內科醫師',
        position: i % 2 === 0 ? '長佳智能股份有限公司' : '其他企業',
        level: '企業',
        active: i % 2 === 0,
      });
    }
    return data;
  };
  