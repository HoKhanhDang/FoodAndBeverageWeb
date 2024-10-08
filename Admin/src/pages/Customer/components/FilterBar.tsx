import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { GrPowerReset } from "react-icons/gr";

const statusItems = [
    {
        value: "active",
        label: "Active",
    },
    {
        value: "banned",
        label: "Banned",
    },
];

export default function FilterBar() {
    const navigate = useNavigate();

    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");

    const [params] = useSearchParams();

    const handleReset = () => {
        setStatus("");
        setSearch("");
        params.delete("status");
        params.delete("search");
        navigate(`?${params.toString()}`);
    };
    const handleChangeStatus = (event: any) => {
        setStatus(event.target.value as string);
        if (event.target.value === "") {
            params.delete("status");
            navigate(`?${params.toString()}`);
            return;
        }
        params.delete("status");
        params.append("status", event.target.value as string);
        navigate(`?${params.toString()}`);
    };
    const handleChangeSearch = (event: any) => {
        setSearch(event.target.value as string);
        if (event.target.value === "") {
            params.delete("search");
            navigate(`?${params.toString()}`);
            return;
        }
        params.delete("search");
        params.append("search", event.target.value as string);
        navigate(`?${params.toString()}`);
    };

    return (
        <div className="w-full h-[10%] bg-transparent p-2 flex justify-center items-center">
            <div className=" w-full h-full flex justify-start items-center bg-white rounded-[30px] gap-5 px-5">
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    id="search"
                    value={search}
                    onChange={handleChangeSearch}
                    className="w-[200px] h-[40px] border border-gray-400 rounded-md px-5 "
                />

                <Box sx={{ minWidth: 120, height: 40 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">
                            Status
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={status}
                            label="Status"
                            onChange={handleChangeStatus}
                            className="w-auto h-[40px] p-2 border border-gray-300 rounded-md bg-white flex items-center"
                        >
                            <MenuItem value={"active"}>Active</MenuItem>
                            <MenuItem value={"banned"}>Banned</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <GrPowerReset
                    onClick={handleReset}
                    className="text-[30px] hover:text-rose-600"
                />
            </div>
        </div>
    );
}
