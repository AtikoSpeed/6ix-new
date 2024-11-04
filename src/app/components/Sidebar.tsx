"use client";

import React from "react";
import type { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="drawer drawer-open sticky w-52">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu bg-base text-base-content min-h-full p-4 gap-2">
          <img className="w-36" src="/logo.svg" alt="logo" />
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <button className="btn">Button</button>
        </ul>
      </div>
    </aside>
  );
}
