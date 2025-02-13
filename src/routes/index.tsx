import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { SignIn } from "../screens/Signin";
import { AppRoutes } from "./appRoutes";

import { Loading } from "../components/Loading";

export function Routes(){
  const [ loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  return(
    <NavigationContainer>
      {!user ? (
        <AppRoutes/>
      ) : (
        <SignIn/>
      )}
    </NavigationContainer>
  )
}