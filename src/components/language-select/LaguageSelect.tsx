import React, { useEffect, useState } from "react";
import i18next from "i18next";
import { ArrowDropDown } from "@mui/icons-material"
import { Button, List, ListItem, Popover } from "@mui/material";


const languageMap = new Map<string, string>([
    ["en", "English"],
    ["ua", "Українська"]
])

const LanguageSelect = () => {
    const [selected, setSelected] =  useState("ua");
    const [menuAnchor, setMenuAnchor] = useState<Element | null>(null);

    useEffect(() => {
        const changeLang = async () => {
           await i18next.changeLanguage(selected)
        }
        changeLang()
    }, [selected])

    return (
        <>
            <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
                {languageMap.get(selected)}
                <ArrowDropDown fontSize="small" />
            </Button>
            <Popover
                open={!!menuAnchor}
                anchorEl={menuAnchor}
                onClose={() => setMenuAnchor(null)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <List>
                    {Array.from(languageMap.keys()).map(key => (
                        <ListItem
                            button
                            key={key}
                            onClick={() => {
                                setSelected(key)
                                setMenuAnchor(null);
                            }}
                        >
                            {languageMap.get(key)}
                        </ListItem>
                    ))}
                </List>
            </Popover>
        </>
    );
};

export default LanguageSelect;
