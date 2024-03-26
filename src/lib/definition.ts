export type Employee = {
  id?: string,
  titleBefore: string,
  firstName: string,
  lastName: string,
  titleAfter: string,
  position: string,
  note: string
}

export interface EmployeePositionTypesProps {
  value: string
  label: string
}

export interface PriceListRaw {
  id?: string,
  title: string,
  price: string,
  order: number,
}

export interface ServiceItem {
  id?: string
  title: string
  description: string
  image: string
  order: number
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface Settings {
  address: string
  email: string
  phone: string
  title: string
  description: string
  image: string
  officeHours: OfficeHours
}
export interface OfficeHours {
  monday: {
    morning: {
      from: string
      to: string
    }
    afternoon: {
      from: string
      to: string
    }
  }
  tuesday: {
    morning: {
      from: string
      to: string
    }
    afternoon: {
      from: string
      to: string
    }
  }
  wednesday: {
    morning: {
      from: string
      to: string
    }
    afternoon: {
      from: string
      to: string
    }
  }
  thursday: {
    morning: {
      from: string
      to: string
    }
    afternoon: {
      from: string
      to: string
    }
  }
  friday: {
    morning: {
      from: string
      to: string
    }
    afternoon: {
      from: string
      to: string
    }
  }
}

export interface Cooperation {
  id?: string
  name: string
  address: string
  phone: string
  email: string
  www: string
  description: string
  cooperationTypeId: string
}

export type CooperationType = {
  id?: string
  name: string
  nameShort: string
}

export interface News {
  id?: string
  dateFrom: string
  dateTo: string
  message: string
}

export interface ContentSetup {
  id?: string
  name: string
  isVisible: boolean
}