﻿using System.Collections.Generic;
using Codesophy.Process;

namespace Codesophy.Configuration
{
    /// <summary>
    /// TODO:Implementation of the <see cref="ISettingProvider{TKey, TValue}"/> that
    /// peeks settings from &lt;appSettings&gt; section of the *.config files.
    /// </summary>
    public class AppSettingProvider : ISettingProvider<string, string>
    {
        private IDictionary<string, string> _dictionary;

        #region ISettingProvider interface ---------------------------------------------------------
        /// <inheritdoc />
        ISetting<string> IProcess<string, ISetting<string>>.When(string when)
        {
            //TODO:
            return _dictionary.TryGetValue(when, out string value)
                ? new AppSetting<string>(when, value)
                : AppSetting<string>.NotExists(when)
            ;
        }
        #endregion ---------------------------------------------------------------------------------

        public AppSettingProvider(IDictionary<string, string> dictionary)
        {
            _dictionary = dictionary;
        }
    }
}
