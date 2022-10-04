import { NavDropdown } from "react-bootstrap"

export const Dropdown = ({ title, items, items2 = false }) => {

    return (
        <NavDropdown title={ title } id="basic-nav-dropdown">
            { items.map(item =>
                <NavDropdown.Item
                    key={ item }
                    href='#'>
                    { item }
                </NavDropdown.Item>)
            }
            <NavDropdown.Divider />

            { items2 && items2.map(item =>
                <NavDropdown.Item
                    key={ item }
                    href='#'>
                    { item }
                </NavDropdown.Item>) }

        </NavDropdown>
    )
}

