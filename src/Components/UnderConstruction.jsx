import React from "react";

const UnderConstruction = () => {
    return (
        <section class="flex items-center justify-center z-10 bg-yellow-400">
            <div class="w-11/12 md:container mx-auto text-black text-center py-1 sm:py-2 font-semibold tracking-wide text-xs sm:text-sm">
                🚧 This site is currently under construction. Some features may
                not work as expected. 🚧
            </div>
        </section>
    );
};

export default UnderConstruction;
