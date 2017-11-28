import React from 'react';
import { mount } from 'enzyme';
import { XMasonry, XBlock } from 'react-xmasonry';

describe('Grid', () => {

  it('Render the <XBlock /> child components', () => {
    const masonry = mount(<XMasonry>
      <XBlock key={1}>
        <div> hello </div>
      </XBlock>
      <XBlock key={2}>
        <div> grid </div>
      </XBlock>
    </XMasonry>);

    console.log(masonry.debug());

    expect(masonry.children().length).toEqual(2);
  });

});
