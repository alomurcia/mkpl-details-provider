import { ProviderContactData } from '../interfaces/provider.interface';
import { GENERAL_FIELDS, CONTACT_FIELDS } from './common-data';
import { ROLES } from './auth';

const fields = {
  ...GENERAL_FIELDS,
  country: 'País',
  city: 'Ciudad',
  address: 'Dirección'
};

export const GENERAL_PROFILE_FIELDS = {
  [ROLES.provider]: { nit: 'NIT', ...fields },
  [ROLES.subsidiary]: fields
};

export const tableHeaders = [
  { label: 'ID', id: 'id', sortable: false },
  { label: 'Nombre', id: 'name', sortable: false },
  { label: 'Ciudad', id: 'city', sortable: true },
  { label: 'Dirección', id: 'address', sortable: false },
  { label: 'Estado', id: 'status', sortable: true },
  { label: 'Acciones', id: 'actions', sortable: false }
];

export const CONTACT_PROFILE_FIELDS: ProviderContactData = CONTACT_FIELDS;
