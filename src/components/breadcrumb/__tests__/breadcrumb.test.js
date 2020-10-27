//vendors
import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

//component
import { Breadcrumb } from '../breadcrumb';

let props, paths;

describe('Breadcrumb', () => {
  beforeEach(() => {
    paths = [
      { id: 'MLA1430', name: 'Ropa y Accesorios' },
      { id: 'MLA109026', name: 'Calzado' },
      { id: 'MLA414251', name: 'Botas y Botinetas' },
    ];
    props = {
      breadcrumbInfo: [
        {
          id: 'category',
          name: 'Categories',
          type: 'text',
          values: [
            {
              id: 'MLA414251',
              name: 'Botas y Botinetas',
              path_from_root: paths,
            },
          ],
        },
      ],
    };
  });

  it('should render correctly', () => {
    const breadcrumbComponent = shallow(<Breadcrumb {...props} />);

    expect(breadcrumbComponent.find(`span#${paths[0].id}`)).toHaveLength(1);
    expect(breadcrumbComponent.find(`span#${paths[1].id}`)).toHaveLength(1);
    expect(breadcrumbComponent.find(`span#${paths[2].id}`)).toHaveLength(1);
  });

  it('should render correctly iif breadcrumb info is empty', () => {
    props = {
      breadcrumbInfo: [],
    };
    const breadcrumbComponent = shallow(<Breadcrumb {...props} />);

    expect(breadcrumbComponent.find(`span`)).toHaveLength(0);
  });
});
