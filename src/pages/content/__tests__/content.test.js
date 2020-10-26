import { shallow } from 'enzyme';
import Content from '../content';

describe('Content', () => {
  it('should render correctly', () => {
    const content = shallow(<Content />);

    expect(content.find('PrincipalContent')).toHaveLength(1);
    expect(content.find('SecondaryContent')).toHaveLength(1);
  });
});
