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
        title: '角色層級',
        key: 'level',
        width: '200',
        sorter: (a: { level: string; }, b: { level: any; }) => a.level.localeCompare(b.level),
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
        render(row: any) {
            return h(NSpace, { justify: 'space-around', align: 'center' }, {
                default: () => [
                    h(NSwitch),
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

export const getMockTableData = () => [
    { name: '長佳智能股份有限公司', level: '企業' },
    { name: '其他企業', level: '企業' }
];
