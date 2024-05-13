import { config } from '@vue/test-utils';

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import AutoComplete from 'primevue/autocomplete';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import Image from 'primevue/image';
import InputNumber from "primevue/inputnumber";
import InputSwitch from 'primevue/inputswitch';
import InputText from "primevue/inputtext";
import Knob from "primevue/knob";
import Listbox from 'primevue/listbox';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from "primevue/multiselect";
import OverlayPanel from 'primevue/overlaypanel';
import Panel from 'primevue/panel';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import RadioButton from 'primevue/radiobutton';
import Sidebar from 'primevue/sidebar';
import SplitButton from 'primevue/splitbutton';
import Steps from 'primevue/steps';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ActiveProducts from '@/components/ActiveProducts.vue';
import InactiveProducts from '@/components/InactiveProducts.vue';
import ProductForm from '@/components/ProductForm.vue';

config.global = {
  components: {
    AboutView,
    Accordion,
    AccordionTab,
    ActiveProducts,
    AutoComplete,
    Badge,
    Breadcrumb,
    Button,
    Calendar,
    Card,
    Carousel,
    Checkbox,
    Chip,
    Column,
    DataTable,
    Dialog,
    Divider,
    Dropdown,
    Fieldset,
    HomeView,
    Image,
    InactiveProducts,
    InputNumber,
    InputSwitch,
    InputText,
    Knob,
    Listbox,
    Menu,
    Menubar,
    Message,
    MultiSelect,
    OverlayPanel,
    Panel,
    ProductForm,
    ProgressBar,
    ProgressSpinner,
    RadioButton,
    Sidebar,
    SplitButton,
    Steps,
    TabPanel,
    TabView,
    Tag,
    Textarea,
    Toast,
    ToggleButton
  },
  directives: {
    Tooltip,
    BadgeDirective
  }
};

export default config;